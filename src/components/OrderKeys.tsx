import Order from "../Order";

export default function OrderKeys() {
    return (
        <>
            {Object.keys(Order).filter((key) => !isNaN(Number(key))).map((option, index) => (
                <option key={index} value={option}>
                    {Order[Number(option)]}
                </option>
            ))}
        </>
    )
}