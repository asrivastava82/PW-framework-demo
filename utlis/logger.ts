
export class APILogger{

private recentLogs: any[] = []

logRequest(method: string, url: string, headers: Record<string, string>, body?: object){
const logEntry = {method, url, headers, body} 
this.recentLogs.push({type: 'Request', data: logEntry})

}
}