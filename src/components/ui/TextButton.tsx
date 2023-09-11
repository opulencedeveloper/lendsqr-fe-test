import { ButtonProp } from "../../../shared/types";


const TextButton: React.FC<ButtonProp> = ({ className, children, onClick, buttonType }) => {
    // const MyComponent: React.FC<MyComponentProps> = ({ className, onClick }) => {
    return <button type={buttonType} className={className} onClick={onClick}>{children}</button>
} 

export default TextButton;