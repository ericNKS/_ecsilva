import PagesLayout from "../layout/pagesLayout";
import styles from "./style/Contact.module.css";

export default function Contact() {
    return (
        <>
            <PagesLayout id="contact" >
                <article className={styles.contactContainer}>
                    <div className={styles.contactSpace}>
                        <div>
                            <label htmlFor="name">
                                Nome:
                            </label>
                            <input type="text" id="name" name="name" />
                        </div>
                        
                        <div>
                            <label htmlFor="email">
                                Email:
                            </label>
                            <input type="email" id="email" name="email" />
                        </div>
                        
                        <div>
                            <label htmlFor="assunto">
                                Assunto:
                            </label>
                            <input type="text" id="assunto" name="assunto" />
                        </div>
                        
                        
                        <div>
                            <label htmlFor="conteudo">
                                Conteudo:
                            </label>
                            <textarea name="conteudo" id="conteudo"></textarea>
                        </div>

                        <div>
                            <button>Enviar</button>
                        </div>
                    </div>
                </article>
            </PagesLayout>
        </>
    );
}