import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css' 

type HeadingProps = {
    children: React.ReactNode;
}

function Heading({ children }: HeadingProps) {
    return (
        <div className={styles.heading}>
            <button className={styles.button}>
                <TimerIcon width={72} height={72} />
            </button>
            <h1 className={styles.h1}>{children}</h1>
        </div>
    )
}
export default Heading