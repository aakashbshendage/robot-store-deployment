terraform {
  backend "s3" {
    bucket = "aakashbshendage.hotstarclone-1" # Replace with your actual S3 bucket name
    key    = "EKS/terraform.tfstate" # tfstate
    region = "us-east-1"
  }
}