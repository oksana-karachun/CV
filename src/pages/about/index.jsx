import classNames from 'classnames';
import React, { useCallback, useState } from 'react';

import { ScrollToTopButton } from '../../features/button/scrollToTop';
import { config } from '../../shared/config';
import { Typography } from '../../shared/ui';
import { Modal } from '../../widgets/modal';
import styles from './styles.scss';

const About = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [experienceId, setExperienceId] = useState();

    const openModalHandle = useCallback((id) => {
        setModalOpen(true);
        setExperienceId(id);
    }, []);

    const closeModalHandle = useCallback(() => {
        setModalOpen(false);
    }, []);

    return (
        <div className={styles.wrapper}>
            <section id="about">
                <div className={styles.header}>
                    <div className={styles.photo}></div>
                    <Typography title="Oksana Karachun" className={styles.name} />
                    <Typography title="Front-end developer" className={styles.position} />
                </div>
            </section>
            <div className={styles.expertise}>
                <Typography title="Expertise" />
                {config.tools.map(tool => (
                    <div key={tool} className={styles.tool}>
                        <Typography title={tool} className={styles['tool-name']} />
                    </div>
                ))}
            </div>
            <div className={styles.experience}>
                <Typography title="Experience" />
                    {config.experience.map(data => (
                        <div className={styles.card} key={data.id} onClick={() => openModalHandle(data.id)}>
                            <div className={styles.line}/>
                            <div className={styles.company}>
                                <Typography title={data.date} className={styles['company-date']} />
                                <Typography title={data.company} className={styles['company-name']} />
                                <Typography title={data.role} className={styles['company-position']} />
                            </div>
                        </div>
                    ))}
            </div>
            <div className={styles.education}>
                <Typography title="Education" />
                {config.education.map(data => (
                    <div key={data.id} className={styles.university}>
                        <div className={styles.paragraph}>
                            <div className={styles.circle}></div>
                            <div className={styles['circle-line']}></div>
                        </div>
                        <div className={styles.info}>
                            <Typography title={data.university} className={styles.text}/>
                            <Typography title={data.degree} className={styles.text}/>
                            <Typography title={data.date} className={styles.text} />
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Typography title="Languages" />
                {config.languages.map(({ id, title, level, percentage }) => (
                    <div key={id} className={styles.languages}>
                        <Typography title={`${title}: ${level}`} className={styles.text} />
                        <div className={styles.line}>
                            <div className={classNames(styles[`level-${percentage}`])}/>
                        </div>
                    </div>
                ))}
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModalHandle}>
                <Typography title={'Responsibilities'} tag={'h2'}/>
                <ul className={styles.responsibilities}>
                    {config.experience.map(({ id, responsibilities }) =>
                        id === experienceId ? responsibilities.map(data => <li key={id}>{data};</li> )  : null
                    )}
                </ul>
            </Modal>
            <ScrollToTopButton/>
        </div>
    );
};

export default About;