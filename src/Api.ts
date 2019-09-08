export class Api {
    public static baseUrl: string = "http://192.168.1.12:3001/"
    public static facePost = (data: any): void => {
        fetch(`${Api.baseUrl}post-face`, {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
}