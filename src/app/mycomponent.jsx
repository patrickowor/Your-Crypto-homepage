import style from './page.module.css'

export function Body() {
  return (
    <>
    <div style={{width : "100%", height : "100%"}}>
        <div className={style.heading}>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 25 24" fill="none">
            <path d="M22.0498 22L20.0498 20M11.5498 21C12.7974 21 14.0327 20.7543 15.1853 20.2769C16.3379 19.7994 17.3852 19.0997 18.2673 18.2175C19.1495 17.3354 19.8492 16.2881 20.3267 15.1355C20.8041 13.9829 21.0498 12.7476 21.0498 11.5C21.0498 10.2524 20.8041 9.0171 20.3267 7.86451C19.8492 6.71191 19.1495 5.66464 18.2673 4.78249C17.3852 3.90033 16.3379 3.20056 15.1853 2.72314C14.0327 2.24572 12.7974 2 11.5498 2C9.03025 2 6.61389 3.00089 4.83229 4.78249C3.05069 6.56408 2.0498 8.98044 2.0498 11.5C2.0498 14.0196 3.05069 16.4359 4.83229 18.2175C6.61389 19.9991 9.03025 21 11.5498 21Z" stroke="#AAAAAA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 31 30" fill="none">
                        <path d="M3.7998 8.75H26.2998M3.7998 15H26.2998M3.7998 21.25H26.2998" stroke="#AAAAAA" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
            </div>

        </div>

    </div>



    <div className={style.mainwrapper}>
        <div className={style.mainbody}>
            <div className={style.title}>Your Crypto.</div>
            <div className={style.title}>Family Style.</div>
            <div className={style.text}>
                Explore Ethereum with the best wallet for iOS.<br /> Interacting with crypto has never been so simple.
            </div>

            <div className={style.inputDiv}>
                <input className={style.input} type="email" placeholder='Enter your email'/>
                <button className={style.inpbtn}> join waitlist </button >
            </div>

            <div className={style.early}>
                 <div className={style.earlyshadowtext}>want early access? </div> <div className={style.earlynoshadowtext}>learn now</div>
            </div>
        </div>


    </div>

        </>
  );
};