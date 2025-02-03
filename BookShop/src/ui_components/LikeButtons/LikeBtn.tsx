interface IProps {
    isActive: boolean;
    custonStyle: React.CSSProperties | undefined;
    click: () => void
}

const LikeBtn = ({ isActive, custonStyle = undefined, click }: IProps) => {
    if (isActive)
        return <i className="fa-solid fa-heart" style={custonStyle} onClick={click}/>
    return <i className="fa-regular fa-heart" style={custonStyle} onClick={click}/>
}

export default LikeBtn;