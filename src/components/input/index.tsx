import style from './styles.module.css';

type InputProps = {
    id: string;
    type: 'text' | 'number';
    title: string;
};

function Input({ id, type, title, ...rest }: InputProps) {
    return (
        <div className={style.inputContainer}>
            <label htmlFor={id}>{title}:</label>
            <input type={type} className={style.input} id={id} {...rest} />
        </div>
    );
}
export default Input;