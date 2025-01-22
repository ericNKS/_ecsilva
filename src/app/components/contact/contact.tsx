import PagesLayout from "../layout/pagesLayout";
import styles from "./style/Contact.module.css";

export default function Contact() {
    return (
        <>
            <PagesLayout id="contact">
                <article className={styles.contactContainer}>
                    <div className="flex justify-center py-8">
                        <h1 className="text-xl font-semibold">
                            Entre em contato comigo
                        </h1>
                    </div>
                    <div className={styles.contactSpace}>
                        <div>
                            <label htmlFor="name">
                                Nome:
                            </label>
                            <input type="text" id="name" name="name" />
                            <label htmlFor="email">
                                Email:
                            </label>
                            <input type="email" id="email" name="email" />
                            <label htmlFor="assunto">
                                Assunto:
                            </label>
                            <input type="text" id="assunto" name="assunto" />
                            <label htmlFor="conteudo">
                                Conteudo:
                            </label>
                            <textarea name="conteudo" id="conteudo"></textarea>
                            <button>Enviar</button>
                        </div>
                    </div>
                </article>
            </PagesLayout>
        </>
    );
}