import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ColognesCitrus from "./ColognesCitrus";
import ColognesFloral from "./ColognesFloral";
import ColognesFruity from "./ColognesFruity";
import ColognesLightFloral from "./ColognesLightFloral";
import ColognesWoody from "./ColognesWoody";

const ColognesCate = () => {
    const { product_scent } = useParams();
    const [comp, setComp] = useState(null);

    console.log(product_scent);
    useEffect(() => {
        console.log(comp);

        if (product_scent == `citrus`) {
            setComp(<ColognesCitrus />);
        }
        if (product_scent == `floral`) {
            setComp(<ColognesFloral />);
        }
        if (product_scent == `fruity`) {
            setComp(<ColognesFruity />);
        }
        if (product_scent == `light-floral`) {
            setComp(<ColognesLightFloral />);
        }
        if (product_scent == `woody`) {
            setComp(<ColognesWoody />);
        }
    }, [product_scent]);
    return <div>{comp}</div>;
};

export default ColognesCate;
