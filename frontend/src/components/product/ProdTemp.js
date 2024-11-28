import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../../scss/product/prodTemp.scss";

function ProdTemp(props) {
    useEffect(() => {
        document.title = "제품상세";
    });
    return (
        <div className="center">
            {/* <HeadNav /> */}

            <Outlet />
        </div>
    );
}

export default ProdTemp;
