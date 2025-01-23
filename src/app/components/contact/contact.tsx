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
                        
                    <form action="https://airform.io/ek.silva.santos@gmail.com" method="post">
                        <div>
                            <label htmlFor="name">
                                Nome:
                            </label>
                            <input type="text" id="name" name="name" placeholder="Nome" />
                            <label htmlFor="email">
                                Email:
                            </label>
                            <input type="email" id="email" name="email" placeholder="exemplo@email.com" />
                            <label htmlFor="assunto">
                                Assunto:
                            </label>
                            <input type="text" id="assunto" name="assunto" placeholder="Oportunidade"/>
                            <label htmlFor="conteudo">
                                Conteudo:
                            </label>
                            <textarea name="conteudo" id="conteudo" placeholder="Gostaria de marcar uma reunião com você..." />
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                    </div>
                </article>
            </PagesLayout>
        </>
    );
}