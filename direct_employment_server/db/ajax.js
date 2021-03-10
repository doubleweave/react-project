export default function ajax(url='', data={}, type='GET') {
    if(type === 'Get') {
        let dataStr = '';
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        });
        if(dataStr !== '') {
            dataStr = dataStr.substring(0, dataStr.lastIndefOf('&'));
            url = url + '?' + dataStr;
        }
        return axios.get(url);
    } else {
        return axios.post(url, data);
    }
}
