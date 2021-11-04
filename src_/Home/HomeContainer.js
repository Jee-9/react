import React, {useState, useEffect} from "react";
import HomePresenter from "./KPresenter";
import {lambdaApi} from "./api_CC";

const HomeContainer = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState({});
    const [error, setError] = useState(null);

    const didMount = async () => {
        try {
            const {
                data: {items}
            } = await lambdaApi.getData();
            setItems(items);
            console.log(items);
            setLoading(false);
            setError(e);
        }
    };
    useEffect(() => {
        didMount();
    }, []);

    return <HomePresenter loading={loading} items={items} setItems={setItems} />;
};

export default HomeContainer;