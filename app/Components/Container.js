import './Container.css'
import Button from './Button'

export default function Container({heading, btn, name}) {
    return( 
        <div className="Container center">
            <h1 className='heading'>{ heading }</h1>
            <p className='para'>Enter your details to get started</p>
            <input placeholder="Enter your name" type="email" className="input first-input"></input>
            <input placeholder="Password" type="password" className="input"></input>
          

            <p className="left-align">Have trouble sigining in?</p>
            <Button btn={btn} />
            
            <p className='mediumtxt'>- Or {name} with -</p>
            <div className='signin-options'>

            <div className="brand">
            <svg className="brand-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
<path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
</svg>          
<p>Google</p>  

            </div>
            <div className="brand">
            <svg className="brand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="apple"><g fill-rule="evenodd"><path d="M11.6218,4.7571c-0.0193291,-2.02332 1.65317,-2.99846 1.72865,-3.04467c-0.939167,-1.37684 -2.40442,-1.56532 -2.92624,-1.58735c-1.24564,-0.125075 -2.431,0.734352 -3.06342,0.734352c-0.630702,0 -1.60726,-0.7153 -2.63953,-0.694961c-1.35921,0.0188997 -2.61125,0.789063 -3.31105,2.00483c-1.41025,2.44865 -0.360481,6.07511 1.01479,8.0616c0.671226,0.970026 1.47351,2.06429 2.52553,2.02476c1.0148,-0.0397892 1.39689,-0.654453 2.62078,-0.654453c1.22488,0 1.56888,0.654453 2.64224,0.634268c1.08898,-0.0196037 1.78139,-0.990762 2.44848,-1.96475c0.771157,-1.12822 1.0887,-2.22035 1.10719,-2.27707c-0.0234604,-0.0085233 -2.12539,-0.815491 -2.14743,-3.23655v0Z" transform="translate(.745 3.743)"></path><path d="M2.49696,2.55553c0.559066,-0.677623 0.934193,-1.61793 0.831414,-2.55553c-0.804695,0.031969 -1.78039,0.537152 -2.3568,1.21266c-0.51813,0.599437 -0.97158,1.55665 -0.848624,2.47462c0.897671,0.0697992 1.81466,-0.455431 2.37401,-1.13175v0Z" transform="translate(7.857)"></path></g></svg>
            <p>Apple</p>
            </div>
            <div className="brand">
            <svg className="brand-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
</svg>
<p>Facebook</p>
            </div>

        </div>
        
        </div>

    )
}