<script setup>
import { ref } from 'vue';

const fileList = ref([]);
const token = 'your-auth-token'; // Replace with your authentication token

const handleSuccess = (response, file, fileList) => {
  // Handle success, e.g., update file list or perform other actions
  console.log('File uploaded successfully', response, file, fileList);
};

const handleRemove = (file, fileList) => {
  // Handle file removal, e.g., update file list or perform other actions
  console.log('File removed', file, fileList);
};

const beforeUpload = (file) => {
  // Perform validation before uploading the file
  const isPNGorJPG = file.type === 'image/png' || file.type === 'image/jpeg';
  const isSizeValid = file.size / 1024 < 500; // Size in KB

  if (!isPNGorJPG || !isSizeValid) {
    console.error('Invalid file format or size. Please upload a PNG or JPG file with size less than 500KB.');
    return false; // Prevent upload
  }

  return true; // Allow upload
};
</script>


<template>
  <el-upload
      class="upload-btn"
      action="/your-upload-api-endpoint"
      :headers="{ Authorization: 'Bearer ' + token }"
      :on-success="handleSuccess"
      :on-remove="handleRemove"
      :before-upload="beforeUpload"
      :file-list="fileList"
    >
      <el-button type="primary" :disabled="fileList.length >= 3" >
        <el-icon> <img src="../assets/images/ic-upload.svg"/></el-icon>
        Upload
      </el-button>
        PNG, JPG files only, size less than 500KB
    </el-upload>
</template>