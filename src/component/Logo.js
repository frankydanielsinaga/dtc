import React from 'react';

function Logopartner(props){
    return(
        <div classname="partner-item">
            <div className="container text-center">
                <h6> Pernah Di Liput oleh:</h6>
                <ul className="partner_list">
                    <li className="mr-3">
                        <img clasName="img-fluid kuda " src={require ('../image/metro.png')} height="40" width="160" alt=""/>
                    </li>
                    <li className="mr-3">
                        <img clasName="img-fluid kuda" src={require ('../image/kompas.png')} height="40" width="160" alt=""/>
                    </li>
                    <li className="mr-3">
                        <img clasName="img-fluid kuda" src={require ('../image/jktpost.png')} height="40" width="160" alt=""/>
                    </li>
                    <li className="mr-3">
                        <img clasName="img-fluid kuda" src={require ('../image/detik.png')} height="40" width="160" alt=""/>
                    </li>
                    <li className="mr-3">
                        <img clasName="img-fluid kuda" src={require ('../image/yahoo.png')} height="40" width="160" alt=""/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Logopartner;