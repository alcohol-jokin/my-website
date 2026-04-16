document.getElementById('testButton').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.innerText = '成功です！GitHubとVercelが連携できています。';
    message.style.color = '#0070f3';
    message.style.marginTop = '10px';
});