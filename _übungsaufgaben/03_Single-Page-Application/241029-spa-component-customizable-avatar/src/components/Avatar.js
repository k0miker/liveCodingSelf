import Figure from 'react-bootstrap/Figure';

 const sizeMap = {
    s: "32px",
    m: "64px",
    l: "128px",
    xl: "100%"
}

function Avatar({ src, size, type, style}) {
    return  (
        <Figure>
            <Figure.Image
                width={sizeMap[size]}
                height={sizeMap[size]}
                src={src}
                rounded={type === "rounded"}
                roundedCircle={type === "circle"}
                style={style}
            />
        </Figure>
    )
}

export default Avatar