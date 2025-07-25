import style from './Subtitle.module.css';

function Subtitle({ text }: SubtitleProps) {
    type SubtitleProps = {
        text: string;
    };
    return (
            <h2 className={style.subtitle}>{text}</h2>
    );
}
export default Subtitle;