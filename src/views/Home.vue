<template>
  <div class="conteiner">
    <div class="retanguloCima">
      <img
        style="width: 5rem; height: 5rem; position: relative; bottom: 0.5rem"
        src="../assets/leia.png"
        alt=""
      />
      <ul
        style="
          display: flex;
          gap: 2rem;
          padding-left: 2rem;
          margin: 0;
          list-style: none;
          align-items: center;
          text-align: center;
          justify-content: center;
        "
      >
        <li>
          <a class="oButton" style="text-decoration: none" href="#inicio"
            >INICIO</a
          >
        </li>
        <li><a class="oButton" href="#apresentacao">EXPLICAÇÃO</a></li>
        <li><a class="oButton" href="#aprimeira">HISTORIA 1</a></li>
        <li><a class="oButton" href="#final">FIM DO SITE</a></li>
        <div style="padding-left: 5rem" class="baixar">
          <a class="oButton" style="width: 6rem; height: 2rem" @click="sair"
            >SAIR</a
          >
        </div>
        <div class="avatar">
          <img
            :style="{
              'background-color':
                icone === 'samurai.png' ? 'black' : 'rgb(196, 206, 206)',
            }"
            class="iconstyle"
            :src="imagemurl || '/imagem/user.png'"
            alt=""
          />
          <p class="nome" style="padding-top: 1.4rem; left: 25%">
            {{ nome ? nome : "unknow" }}
          </p>
        </div>
      </ul>
    </div>
    <div class="quadradao">
      <div
        class="texto"
        style="
          margin-top: 15px;
          display: flex;
          text-align: center;
          justify-content: center;
          margin-bottom: 0;
          text-align: center;
          height: 6rem;
          background-color: #29e2e2;
          width: 100%;

          border-right: 2px solid black;
          border-bottom: 2px solid black;
        "
      >
        <h1
          style="
            font-size: 2rem;
            padding-top: 1.5rem;
            color: rgba(240, 239, 239, 0.842);
          "
        >
          BEM VINDO
        </h1>
      </div>

      <div id="inicio" class="imagem">
        <img src="../assets/começo.jpg" alt="" />
      </div>
      <div id="apresentacao"></div>
      <div class="introducao">
        <div class="texto">
          <h1 style="padding-left: 1.8rem; padding-top: 5rem; font-size: 3rem">
            OLA MOÇOS E MOÇAS 👋
          </h1>
          <br />

          <p style="padding-left: 2rem; padding-right: 2rem; font-size: 1.5rem">
            Bem-vindo ao meu site! Aqui, compartilho histórias, a maioria delas
            criadas por mim, mas também conto com a ajuda do Chat GPT para
            escrever corretamente e obter ideias. <br />

            Algumas das histórias são inspiradas em sugestões fornecidas pelo
            <font size="6">Chat GPT</font> e com imagens geradas pela
            <font size="6">IA BlueWillow</font> que eu simplesmente adorei!
            Gostaria de avisar que o site ainda está em desenvolvimento, e tenho
            planos de criar mais histórias futuramente. <br />
            Sou apaixonado por conceitos cyber e histórias que retratam futuros
            tecnológicos, mas que também remetem à nossa realidade, como Blade
            Runner, Cyberpunk 2077, RoboCop, Ghost in the Shell, Star Wars e
            Akira. <br />
            <br />
            A primeira história aqui apresentada é ambientada em um universo
            alternativo ao de Star Wars, com muitas inspirações em animes e
            filmes. <br />
            Além disso, estou aprendendo a programar em JavaScript e quis criar
            este site para compartilhar minhas ideias e também aprimorar minhas
            habilidades. <br />
            <br />
            <font size="6"
              >Se você optou por se cadastrar , muito obrigado!</font
            >
            Com o cadastro, você receberá as continuações da história que serão
            atualizadas exclusivamente para os usuários cadastrados. Nesse
            estágio inicial, o cadastro é simples e aceita qualquer e-mail,se
            você quiser pode até por pão@gmail.com, mas tenho planos de
            aprimorá-lo no futuro. Não se preocupe se você pois o seu email real
            , garanto que suas informações estarão seguras. <br />
            <br />
            Além da história atual, tenho planos de criar narrativas inspiradas
            no universo de Cyberpunk 2077 em breve! Fique atento a novas
            atualizações. Espero que desfrute da leitura e acompanhe o
            crescimento deste site! Seja bem-vindo e obrigado por estar aqui!
          </p>
          <div class="embaixo" style="display: flex">
            <iframe
              style="margin-top: 50px"
              src="https://giphy.com/embed/IoKpatONhuU5SWm8Zx"
              width="430"
              height="200"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
            <p>
              <a
                class="lucy"
                href="https://giphy.com/stickers/Edgerunners-lucy-cyberpunk-edgerunners-you-get-in-IoKpatONhuU5SWm8Zx"
              ></a>
            </p>
            <a class="oButton posicao" href="https://github.com/victorsiqueira1"
              >clica aqui</a
            >
          </div>
        </div>
      </div>
      <hr class="arrumar" />
      <div id="aprimeira"></div>
      <div class="prologo">
        <h1 style="text-align: center; padding-top: 5rem; padding-left: 18rem">
          prólogo da historia
        </h1>
        <br />

        <p>
          <span style="font-size: 2rem; color: darkmagenta">1.</span> Em um
          planeta remoto chamado Veridia, Kael Dharak, um jovem órfão, cresce em
          uma sociedade dominada pelo Império Sith, onde a opressão é
          implacável. Determinado a libertar seu povo, Kael anseia por uma forma
          de resistir ao poder opressivo do Império. Em sua busca por uma
          solução, os cinco mais habilidosos mestres Jedis daquela época
          constroem o conselho, que são os rensponsaveis de acabar com a guerra
          que se tem a anos do imperio e a republica. em meioa a tanta luta,
          eles ficam encantados com a destreza e o talento natural de Sora
          Venturis como pilota, eles enxergam nela um grande potencial para se
          tornar uma Jedi, alem de achar dois promisores jovens Jedis : Kael e
          Aeryn. Decididos a desafiar o Império, os cinco mestres decidem
          treinar Kael, Sora e Aeryn Tora. <br /><br />
        </p>

        <div style="font-size: 2rem">
          <p>esse é Kael:</p>
          <img src="../assets/outroPersonagem.ico" alt="" />
        </div>

        <br />
        <p>
          <span style="font-size: 2rem; color: darkmagenta">2.</span>
          Durante o treinamento árduo e desafiador, Kael, Sora e Aeryn
          desenvolvem habilidades extraordinárias nas artes Jedi. Contudo, Sora,
          apesar de seu talento, é atormentada por incertezas sobre o caminho a
          seguir. A sombra do lado sombrio da Força a perturba constantemente, e
          ela enfrenta uma batalha interna para resistir a suas tentações.
        </p>
        <br />

        <div>
          <p>
            Esse é Aeryn Tora ( ja aviso que todos os nomes foram dados pelo
            chat gpt) :
          </p>
          <img src="../assets/AerynTora.jpg" alt="" />
        </div>

        <br /><br />

        <p>
          <span style="font-size: 2rem; color: darkmagenta">3.</span> Enquanto
          isso, a Aliança Rebelde fica ciente da existência dos três jovens Jedi
          e solicita sua ajuda para enfrentar o Império. Kael, Sora e Aeryn se
          unem à causa rebelde, embarcando em missões perigosas para sabotar o
          Império e libertar planetas oprimidos. <br />No clímax da história,
          eles confrontam o terrível líder do Império Sith, que busca uma arma
          capaz de dizimar sistemas inteiros. A batalha é feroz, e os heróis
          enfrentam desafios devastadores. Kael e Aeryn se mostram firmes em sua
          lealdade à luz, enquanto Sora luta para resistir ao chamado do lado
          sombrio.
        </p>

        <br />

        <div style="font-size: 2rem">
          <p>essa é Sora (ta quase perfeito vai) :</p>
          <img src="../assets/Sora.jpg" alt="" />
        </div>
        <br />

        <p>
          <span style="font-size: 2rem; color: darkmagenta">4.</span>
          Juntos, eles lutaram incansavelmente contra o Império e, com
          determinação, conseguiram alcançar a tão esperada vitória, libertando
          a galáxia das garras opressoras do Império. Com a derrota do Império,
          a rebelião assumiu o controle da galáxia, e muitas decisões
          importantes passaram a ser tomadas pelo grupo denominado: O Conselho.
          composto pelos cinco Jedi mestres, que também foram os mentores de
          Sora, Kael e Aeryn .para guiar e proteger a galáxia em tempos de paz e
          reconstrução. No entanto, o que ninguém esperava era que o Conselho
          Jedi decidisse aceitar um novo membro em suas fileiras, alguém
          igualmente poderoso, mas de uma origem inesperada: um Sith. Os motivos
          dessa decisão eram desconhecidos para muitos, e alguns questionavam a
          sabedoria de confiar em alguém com tal conexão com o lado sombrio da
          Força. Apenas os membros do Conselho sabiam o verdadeiro motivo e
          acreditavam que esse novo membro poderia ser redimido e trazer
          equilíbrio à Força. Com o passar do tempo, rumores começaram a surgir
          sobre Sora e suas ações misteriosas. Sem que ninguém soubesse ao certo
          como ou por que, ela parecia ter sido corrompida pela sombra do lado
          sombrio. Essa corrupção a levou a cometer atos inimagináveis,
          culminando em uma terrível reviravolta: Sora traiu os seus antigos
          mentores e companheiros Jedi, enfrentando-os em um confronto sangrento
          e destrutivo.
        </p>
        <br />

        <p>
          <span style="font-size: 2rem; color: darkmagenta">5.</span>
          Sozinha, Sora enfrentou quase todos os Jedi restantes, eliminando a
          maioria, sobrando alguns, com sua força incomparável e desencadeando
          uma onda de medo e desespero por toda a galáxia. A traição foi
          avassaladora, e ela não poupou nem mesmo os membros do Conselho Jedi ,
          o sobreviventes diziam que o olhar de Sora era assasino e de muita
          raiva.A ascensão da Sora corrompida levou ao ressurgimento de um novo
          Império, com ela como sua líder impiedosa. Assim, ela mergulhou a
          galáxia em uma nova era de escuridão e tirania, marcando um fim
          sombrio para o sonho de paz e liberdade que os Jedi lutaram tanto para
          alcançar.
        </p>
        <br />

        <p>
          <span class="grande">PS: </span> iremos voltar nessa guerra e toda a
          historia da Sora e seu passado, alem de muitas informações sobre esse
          conselho e muito mais!
          <br />
          <br /><font size="6">preste muita atenção nas cores :</font> <br />
          o <font color="#199C1B" size="6">Verde </font>e quando estou contanto
          uma historia do passado. <br /><font color="#034365" size="6"
            >azul
          </font>
          é a historia que se passa presente e que é focada nos personagens
          principais.<br />
          <font color="#E5163A" size="6">vermelho </font> é que estamos contanto
          a Historia de alguem do lado do império
        </p>

        <br />
      </div>

      <div v-for="dado in dados">
        <h1
          class="texto"
          style="
            margin: 0;

            padding-bottom: 1rem;
            text-align: center;
            font-size: 3rem;
            background: rgb(39, 167, 219);
            background: linear-gradient(
              90deg,
              rgba(39, 167, 219, 1) 1%,
              rgba(255, 255, 255, 1) 32%
            );
          "
        >
          <hr
            class="arrumar"
            style="height: 10px; background-color: black; margin-bottom: 2rem"
          />
          {{ dado.ato }}
        </h1>

        <div
          class="primeira"
          style="padding-left: 2rem"
          v-html="dado.html.replaceAll('\\n', '')"
        ></div>
      </div>
      <div id="final"></div>
      <hr class="arrumar" style="height: 8px; background-color: black" />

      <div class="terca" style="padding-top: 5rem">
        <h1 style="text-align: center; padding-bottom: 1rem">
          o final por enquanto...
        </h1>
        <span>
          Bem, irei parar por enquanto. Sempre sairá em dois atos, Até depois! E cadastre-se
          para receber mais capitulos quando você voltar, ja tem mais 2 capitulos. Até👋
        </span>
        <br />
        <br />
        <div>
          <input
            style="width: 95%; height: 3rem; padding-left: 13px"
            class="coment"
            placeholder="comente sobre oq achou da historia"
            v-model="comentario"
            required
            type="comentary"
            id="comentario"
            @keyup.enter="postarComent"
          />

          <div
            style="padding-top: 20px"
            v-for="comentario in todosComents"
            :key="comentario.id"
          >
            <p>comentario {{ comentario.id }} :</p>

            <p>{{ comentario.nome || "Unknown" }}</p>
            <input
              style="width: 55%; height: 3rem; padding-left: 13px"
              class="coment"
              disabled
              :value="comentario.comentario"
              type="comentary"
              id="comentario"
            />
          </div>
        </div>
      </div>
      <div
        class="texto"
        style="width: 100%; height: 2rem; text-align: center; font-size: 20px"
      >
        <p>este site foi feito por victor hugo pedroso cubas de siqueira</p>
      </div>
      <div
        class="texto"
        style="width: 100%; height: 3.5rem; text-align: center; font-size: 20px"
      >
        <p>victor.hugo.pcs2003</p>
        <p>
          é o meu insta , acho que é a unica coisa que eu uso, e ainda uso pouco
        </p>
      </div>
      <div
        class="texto"
        style="width: 100%; height: 5rem; text-align: center; font-size: 40px"
      >
        <p>se voce leu isso, muito obrigado do fundo do coração</p>
      </div>
    </div>
  </div>
</template>
<script>
import { api } from "../lib/api";
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "../stores/counter";

export default {
  data() {
    return {
      dados: [],
      comentario: "",
      todosComents: [],
    };
  },
  computed: {
    ...mapState(useAuthStore, ["usuarioLogado", "nome", "icone", "id"]),
    imagemurl() {
      if (this.icone) {
        return import.meta.env.VITE_URL_BACKEND + "/arquivo/" + this.icone;
      }
      return null;
    },
  },
  methods: {
    ...mapActions(useAuthStore, ["deslogar"]),

    obtdados() {
      api.get("/historias").then((res) => {
        this.dados = res.data;
      });
      api.get("/comentarios").then((res) => {
        this.todosComents = res.data;
      });
    },
    async postarComent() {
      await api.post("/comentarios", {
        comentario: this.comentario,
        idUsuario: this.id ? this.id : -1,
      });

      this.comentario = "";

      this.obtdados();
    },
    sair() {
      this.deslogar();
      this.$router.replace("/login");
    },
  },
  created() {
    this.obtdados();
  },
};
</script>
<style scoped>
.imagem {
  width: 98%;
  height: 65rem;
  background-image: url(../assets/papel.jpg);
  border-left: 5px solid black;
  border-right: 5px solid black;
  border-bottom: 5px solid black;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  margin-top: 0;
  padding-top: 0;
}
.retanguloCima {
  width: 100%;
  height: 4rem;
  background-color: rgb(39, 177, 177);
  border-top: 3px solid black;
  border-bottom: 2px solid black;
  position: fixed;
  top: 0;
  display: flex;
}
.oButton {
  border: transparent;
  width: 10rem;
  height: 3.9rem;

  border: 2px solid black;
  background-color: #d1d8d3;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Belanosima", sans-serif;

  transition: 0.5s ease-in-out;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
a {
  color: rgba(10, 10, 10, 0.966);
  text-decoration: none;
}

.grande {
  font-size: 3rem;
}
.oButton ::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #e5163a;
  transition: 0.5 s ease-in-out;
  z-index: -1;
  clip-path: circle(0% at 50% 50%);
}
.lucy {
  margin-top: 4rem;
}
.oButton:hover {
  color: #fff;
  background-color: #e5163a;
  cursor: pointer;
}
.oButton:hover::before {
  clip-path: circle(100% at 50% 50%);
}
.iconstyle {
  width: 4%;
  height: 50px;
  position: fixed;
  left: 82%;
  border-radius: 99%;
  border: 2px solid black;
  bottom: 37rem;
  top: 0.4rem;
}
.avatar {
  font-family: "Belanosima", sans-serif;
  background-color: rgb(56, 153, 145);
  width: 20%;
  height: 3.7rem;
  position: fixed;
  left: 80%;
  border-left: 3px solid black;
  top: 0.2rem;
}
.arrumando {
  border: 1px solid black;
}

.introducao {
  display: flex;
  margin-left: 5%;
  width: 55%;
}
.quadradao {
  width: 100%;

  margin-top: 45px;
  padding-top: 0.2rem;
  background-color: #ffffffb9;
}

.texto {
  font-family: "Bebas Neue", sans-serif;
  margin-top: 1rem;
}
.posicao {
  margin-top: 11.7rem;
  margin-left: 10rem;
  border-bottom: black 1px solid !important;
}
.prologo {
  font-family: "Bebas Neue", sans-serif;
  padding-right: 20rem;
  justify-content: center;
  background: rgb(39, 88, 219);
  background: rgb(39, 219, 99);
  background: linear-gradient(
    90deg,
    rgba(39, 219, 99, 1) 1%,
    rgba(255, 255, 255, 1) 25%
  );
  text-align: left;
  font-size: 1.3rem;
  padding-left: 2rem;
}
.primeira {
  font-family: "Bebas Neue", sans-serif;
  padding-right: 20rem;
  justify-content: center;
  background: rgb(39, 167, 219);
  background: linear-gradient(
    90deg,
    rgba(39, 167, 219, 1) 1%,
    rgba(255, 255, 255, 1) 32%
  );
  text-align: left;
  font-size: 1.3rem;
  padding-left: 4rem;
  padding-bottom: 2rem;
}
.segunda {
  font-family: "Bebas Neue", sans-serif;
  padding-right: 20rem;
  justify-content: center;
  background: rgb(39, 167, 219);
  background: linear-gradient(
    90deg,
    rgba(39, 167, 219, 1) 1%,
    rgba(255, 255, 255, 1) 32%
  );
  text-align: left;
  font-size: 1.3rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
}
.terca {
  font-family: "Bebas Neue", sans-serif;

  justify-content: center;
  text-align: left;
  font-size: 1.3rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
}
@media screen and (min-width: 1700px) and (max-width: 2600px) {
  .iconstyle {
    width: 5rem;
    height: 50px;
    position: fixed;
    left: 88%;
    border-radius: 99%;
    border: 2px solid black;
    bottom: 37rem;
    top: 0.4rem;
  }
  .prologo {
    font-family: "Bebas Neue", sans-serif;
    padding-right: 50rem;
    justify-content: center;
    background: rgb(39, 88, 219);
    background: rgb(39, 219, 99);
    background: linear-gradient(
      90deg,
      rgba(39, 219, 99, 1) 1%,
      rgba(255, 255, 255, 1) 25%
    );
    text-align: left;
    font-size: 1.3rem;
    padding-left: 2rem;
  }
  .primeira {
    font-family: "Bebas Neue", sans-serif;
    padding-right: 50rem;
    justify-content: center;
    background: rgb(39, 167, 219);
    background: linear-gradient(
      90deg,
      rgba(39, 167, 219, 1) 1%,
      rgba(255, 255, 255, 1) 32%
    );
    text-align: left;
    font-size: 1.3rem;
    padding-left: 4rem;
    padding-bottom: 2rem;
  }
  .nome {
    padding-top: 1.2rem !important;
    padding-left: 10% !important;
  }

  .avatar {
    font-family: "Belanosima", sans-serif;
    background-color: rgb(56, 153, 145);
    width: 20%;
    height: 3.7rem;
    position: fixed;
    left: 85%;
    border-left: 3px solid black;
    top: 0.2rem;
  }
}
@media screen and (min-width: 1054px) and (max-width: 1328px) {
  .oButton {
    border: transparent;
    width: 10rem;
    height: 3.9rem;

    border: 2px solid black;
    background-color: #d1d8d3;
    font-size: 15px;
    text-transform: uppercase;
    font-family: "Belanosima", sans-serif;

    transition: 0.5s ease-in-out;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .nome {
    padding-bottom: 25px !important;
    padding-left: 3% !important;
  }
  .iconstyle {
    width: 4rem;
    height: 50px;
    position: static;
    left: 88%;
    border-radius: 99%;
    border: 2px solid black;
    bottom: 37rem;
    top: 0.4rem;
    margin-bottom: 3px;
    margin-left: 5px;
    margin-right: 30px;
  }

  .baixar {
    position: fixed;
    top: 3.9rem;
    left: 50rem;
  }
  .avatar {
    display: flex;
    font-family: "Belanosima", sans-serif;
    background-color: rgb(56, 153, 145);
    width: 50vw;
    height: 3.7rem;
    position: static;
    left: 80%;
    border-left: 3px solid black;
    top: 0.2rem;
    align-items: center;
  }
}
@media screen and (min-width: 600px) and (max-width: 1053px) {
  .arrumar {
    width: 100rem;
    border: 1px solid black;
  }
  .conteiner {
    width: 100rem;
  }
  .primeira {
    font-family: "Bebas Neue", sans-serif;
    padding-right: 20rem;
    justify-content: center;
    background: rgb(39, 167, 219);
    background: linear-gradient(
      90deg,
      rgba(39, 167, 219, 1) 1%,
      rgba(255, 255, 255, 1) 32%
    );
    text-align: left;
    font-size: 1.3rem;
    padding-left: 4rem;
    padding-bottom: 2rem;
  }
  .aprimeira {
    font-family: "Bebas Neue", sans-serif;
    padding-right: 20rem;
    justify-content: center;
    background: rgb(39, 167, 219);
    background: linear-gradient(
      90deg,
      rgba(39, 167, 219, 1) 1%,
      rgba(255, 255, 255, 1) 32%
    );
    text-align: left;
    font-size: 1.3rem;
    padding-left: 4rem;
    padding-bottom: 2rem;
  }
}
@media screen and (min-width: 250px) and (max-width: 599px) {
  .primeira {
    font-family: "Bebas Neue", sans-serif;
    padding-right: 4rem;
    padding-left: 6rem;
    justify-content: center;
    background: rgb(39, 167, 219);
    background: linear-gradient(
      90deg,
      rgba(39, 167, 219, 1) 1%,
      rgba(255, 255, 255, 1) 32%
    );

    text-align: center;
    font-size: 1.3rem;
    padding-left: 4rem;
    padding-bottom: 2rem;
  }
  .aprimeira {
    font-family: "Bebas Neue", sans-serif;
    padding-right: 20rem;
    justify-content: center;
    background: rgb(39, 167, 219);
    background: linear-gradient(
      90deg,
      rgba(39, 167, 219, 1) 1%,
      rgba(255, 255, 255, 1) 32%
    );
    text-align: left;
    font-size: 1.3rem;
    padding-left: 4rem;
    padding-bottom: 2rem;
  }
  .prologo {
    font-family: "Bebas Neue", sans-serif;
    padding-right: 0rem;
    width: 100%;
    justify-content: center;
    background: rgb(39, 88, 219);
    background: rgb(39, 219, 99);
    background: linear-gradient(
      90deg,
      rgba(39, 219, 99, 1) 1%,
      rgba(255, 255, 255, 1) 25%
    );
    text-align: center;
    font-size: 1.3rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }
  .conteiner {
    width: 65.9rem;
  }
  .baixar {
    position: fixed;
    top: 3.9rem;
    left: 50rem;
  }
}
</style>
