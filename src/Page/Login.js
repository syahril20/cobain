import './Login.css';


const Login = () => {
    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Comic+Neue&family=Shantell+Sans:ital@1&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <div className='box'>
                <div className='text'>
                    <p>Login</p>
                    <div>
                        <div className='fa-solid fa-user icon'>
                            
                        </div>
                        <input type={'text'} className='textBox' id='Username'></input>
                    </div>
                    <input type={'password'} className='textBox' id='Password'></input><br />
                    <button type='submit' className='button' id='submit'>Submit</button><br />
                    <button type='button' className='button' id='Register'>Register</button><br />
                </div>
            </div>
        </div>
    );
}
export default Login;