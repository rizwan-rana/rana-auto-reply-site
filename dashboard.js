
document.getElementById('app-root').innerHTML = `
  <h2>Enter Dashboard Password</h2>
  <input type='password' id='pw' placeholder='Password' style='padding:10px;width:80%;margin-bottom:10px;' />
  <button onclick='checkPW()' style='padding:10px 20px;'>Login</button>
  <div id='msg' style='color:red;margin-top:10px;'></div>
`;

function checkPW() {
  const input = document.getElementById('pw').value;
  if (input === 'rizwan123') {
    document.getElementById('app-root').innerHTML = '<h2>Welcome to your private dashboard</h2><p>This is where your AI chat system will live.</p>';
  } else {
    document.getElementById('msg').innerText = 'Incorrect password';
  }
}
