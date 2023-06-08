export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "helloaibc6272d5": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "predictions": {
        "speechtotext": {
            "region": "string",
            "language": "string",
            "voice": "string"
        },
        "audiototext": {
            "region": "string",
            "language": "string"
        }
    },
    "hosting": {
        "S3AndCloudFront": {
            "Region": "string",
            "HostingBucketName": "string",
            "WebsiteURL": "string",
            "S3BucketSecureURL": "string"
        }
    }
}