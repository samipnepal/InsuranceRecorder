<?php
$imageFileType = strtolower(pathinfo($_FILES["file"]["name"],PATHINFO_EXTENSION));
if(!empty($_FILES['file'])){
    $check = getimagesize($_FILES["file"]["tmp_name"]);
    if($check !== false) {
        if ($_FILES["file"]["size"] > 500000) {
            $message =  "Sorry, your file is too large.";
            echo json_encode($message);
        } else {
            if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
                && $imageFileType != "gif" ) {
                $message =  "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
                echo json_encode($message);
            } else {
                $ext = pathinfo($_FILES['file']['name'],PATHINFO_EXTENSION);
                $image = "policy_".time().'.'.$ext;
                if (move_uploaded_file($_FILES["file"]["tmp_name"], '../../uploads/'.$image)) {
                    $message["message"] = "success";
                    $message["image_name"] = $image;
                    echo json_encode($message);
                } else {
                    echo "Sorry, there was an error uploading your file.";
                }
            }
        }
    } else {
        $message =  "File is not an image.";
        echo json_encode($message);
    }
}
?>