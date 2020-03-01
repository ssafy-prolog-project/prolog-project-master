package com.ssafy.api.service;

import com.ssafy.api.advice.exception.CFileDownloadException;
import com.ssafy.api.advice.exception.CFileUploadException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class FileUploadDownloadService {
    private Path fileLocation;

    @Value(value = "${file.upload-dir}")
    private String uploadDir;

    private void checkDirectory(){
        StringBuilder sb = new StringBuilder();
        sb.append(uploadDir).append('/');
        this.fileLocation = Paths.get(sb.toString())
                .toAbsolutePath().normalize();
        try {
            Files.createDirectories(this.fileLocation);
        }catch(Exception e) {
            throw new CFileUploadException("파일을 업로드할 디렉토리를 생성하지 못했습니다.", e);
        }
    }

    public String storeFile(MultipartFile file) {
        checkDirectory();
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // 파일명에 부적합 문자가 있는지 확인한다.
            if(fileName.contains(".."))
                throw new CFileUploadException("파일명에 부적합 문자가 포함되어 있습니다. " + fileName);
            String extension = fileName.substring(fileName.lastIndexOf("."), fileName.length());
            UUID uuid = UUID.randomUUID();
            fileName = uuid.toString() + extension;
            Path targetLocation = this.fileLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return fileName;
        }catch(Exception e) {
            throw new CFileUploadException("["+fileName+"] 파일 업로드에 실패하였습니다. 다시 시도하십시오.",e);
        }
    }


    public Resource loadFileAsResource(String fileName) {
        try {
            Path filePath = this.fileLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());

            if(resource.exists()) {
                return resource;
            }else {
                throw new CFileDownloadException(fileName + " 파일을 찾을 수 없습니다.");
            }
        }catch(MalformedURLException e) {
            throw new CFileDownloadException(fileName + " 파일을 찾을 수 없습니다.", e);
        }
    }
}
