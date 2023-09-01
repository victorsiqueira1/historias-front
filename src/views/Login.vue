<template>
  <div class="container">
    <div class="imagens" >
   
      <img class="none" style="width: 50%;display: " src="../assets/umHomem.jpg" alt="" />
      <img class="none"
        style="width: 50%"
        src="../assets/6b9fc114-da2e-4b25-bb27-6c3a5806f914.jpg"
        alt=""

      />
    
      <div class="oLoginTodo">
        <div class="bemVindo">
          <h1 class="bemVindo" style="font-size: 50px; color: black; margin-bottom: 10px">
            Bem vindo a um site com uma historia minha feita com a ajuda de uma
            Ia!
          </h1>
        </div>
        <div class="Ps">
          <p
            style="
              padding-left: 10px;
              padding-right: 10px;
              padding-bottom: 15px;
            "
          >
            esse site é para eu contar algumas historias que eu criei com a
            ajuda de uma Ia , se você estiver interessado... Venha conferir!
          </p>
        </div>
        <div class="quadradoCont" v-if="criarConta">
          <img
            @click="criarConta = false"
            style="
              position: relative;
              width: 2.6rem;
              height: 2.5rem;
              left: 91%;
              top: 0.5rem;
              cursor: pointer;
            "
            src="../assets/xizinho.png"
            alt=""
          />
          <div >
            <p style="font-size: 30px; margin: 0">
              <span style="font-size: 40px; text-decoration: underline"
                >CADASTRASSE AGORA!</span
              >
              assim voce recebera a continuação da historia e de futuras outras
            </p>
          </div>
          <div class=""
            style="
              width: 10%;
              height: 5rem;
              display: flex;
              padding-top: 20px;
              position: relative;
              left: 3.3rem;
            "
          >
            <label style="font-size: 42px; padding-right: 3%" for="text"
              >Nome:</label
            >
            <input
              style="height: 80%; padding-left: 8px"
              class="umCadastro"
              placeholder="Seu Nome"
              v-model="nomeCadas"
              type="text"
              id="text"
            />
          </div>

          <div
            style="margin-left: 37px; width: 10%; height: 30px; display: flex"
          >
            <label style="font-size: 42px; padding-right: 4%" for="text"
              >login:</label
            >
            <input
              style="padding-left: 10px"
              class="umEmail"
              placeholder="Email"
              v-model="emailCadas"
              type="text"
              id="Umemail"
            />
          </div>
          <div
            style="
              margin-left: 37px;
              width: 10%;
              height: 3.6rem;
              display: flex;
              padding-top: 28px;
              padding-left: 2px;
            "
          >
            <label style="font-size: 42px; padding-right: 0px" for="senha"
              >Senha:</label
            >
            <input
              style="padding-left: 10px"
              class="pass"
              placeholder="Sua Senha"
              v-model="senhaCadas"
              type="password"
              id="senha"
            />
          </div>
          <div class="arrumandobaixo" >
          
            <div style="display: flex; ">
              <p
              style="
                width: 100px;
                font-size: 40px;
                position: relative;
                top: 5px;
                right: 35px;
              "
            >
              escolha:
            </p>  <img
              v-for="(imagem, i) in img"
              :style="{
                width: '70px',
                'background-color':
                  imagem.nome === 'samurai.png' ? 'black' : 'rgb(196, 206, 206)',
                height: '70px',
                border: 'solid 2px black',

                'border-radius': '100px',
                cursor: 'pointer',
              }"
              :src="imagem.src"
              @click="selecioneimg(imagem.nome)"
              :key="i"
              alt=""
            />
            </div>
          </div>
          <button 
            style="width: 70%; font-size: 13px;left: 15%; top: 25%"
            class="oButton"
            @click.prevent="registrar"
          >
            criar conta
          </button>
          

        </div>

        <form
          style="display: flex; flex-direction: column; gap: 25px"
          @submit.prevent="Logar"
        >
          <div>
            <label style="font-size: 22px; padding-right: 5px" for="text"
              >seu login:</label
            >
            <input
              style="padding-left: 10px"
              class="umEmail"
              placeholder="Email"
              required
              v-model="email"
              type="email"
              id="Email"
            />
          </div>
          <div style="margin-left: 37px">
            <label style="font-size: 22px; padding-right: 5px" for="senha"
              >Senha:</label
            >
            <input
              style="padding-left: 10px"
              class="pass"
              placeholder="Sua Senha"
              v-model="senha"
              required
              type="password"
              id="senha"
            />
          </div>
          <div
            style="
              display: flex;
              gap: 13px;
         justify-content: center;
              margin-top: 20px;
            "
          >
            <button type="submit" style="width: 80px" class="oButton">
              logar</button
            ><button
              style="width: 100px; font-size: 12px"
              class="oButton"
              @click.prevent="SemSenha"
            >
              entrar sem senha
            </button>
            <button
              style="width: 100px; font-size: 13px"
              class="oButton"
              @click.prevent="criarConta = true"
            >
              criar conta
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "pinia";
import { useAuthStore } from "../stores/counter";
import { mapActions } from "pinia";
import { api } from "../lib/api";
export default {
  data() {
    return {
      email: null,
      senha: null,
      emailCadas: null,
      nomeCadas: null,
      senhaCadas: null,
      criarConta: false,
      imagemCadas: null,
      img: [],
    };
  },
  computed: {
    ...mapState(useAuthStore, ["usuarioLogado"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["login"]),
    async Logar() {
      try {
        const { data } = await api.post("/user/login", {
          email: this.email,
          senha: this.senha,
        });

        this.login(data);

        this.$router.replace("/");
      } catch (error) {
        console.log(error);
        alert(error.response?.data?.mensagem);
      }
    },
    async registrar() {
      try {
        await api.post("/user/registrar", {
          nome: this.nomeCadas,
          senha: this.senhaCadas,
          email: this.emailCadas,
          icone: this.imagemCadas
        });

        alert("usuario cadastrado");
        this.criarConta = false;
      } catch (error) {
        alert(error.response.data.mensagem);
      }
    },
    SemSenha() {
      this.login();
      this.$router.replace("/");
    },
    async obtimagen() {
      const resposta = await api.get("/user/avatar");
      this.img = resposta.data.arquivos.map((e) => {
        return {
          src: import.meta.env.VITE_URL_BACKEND + "/arquivo/" + e,
          nome: e,
        };
      });
    },
    selecioneimg(imagem) {
      this.imagemCadas= imagem
    },
  },
  created() {
    this.obtimagen();
  },
};
</script>
<style scoped>
.quadradoCont {
  width: 40%;
  height: 38rem;
  position: fixed;
  background-color: #4069a7d8;
  left: 40%;
  display: flex;
  border: 10px solid black;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
}
.arrumandobaixo{
  position: relative; top: 15%; left: 15%; display: block
}

.container {
  width: 100%;
  height:30vh;
  font-family: "VT323", monospace;
}

.oLoginTodo {
  width: 25rem;
  height: 100%;

  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-image: url(../assets/rpg.jpg);
}.Ps {
  font-size: 20px;

}
.umCadastro {
  height: 150%;
  border: none;
  background-color: #d3d3d3;
  border-radius: 10px;
}
.umEmail {
  height: 150%;
  border: none;
  background-color: #d3d3d3;
  border-radius: 10px;
}
.pass {
  height: 150%;
  border: none;
  background-color: #d3d3d3;
  border-radius: 10px;
}
.oButton {
  width: 50px;
  height: 45px;
  border: transparent;
  border-radius: 10px;
  background-color: #d8d1d1;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Belanosima", sans-serif;
  position: relative;
  transition: 0.5s ease-in-out;
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
.imagens{
    height: 70rem;
    width:100%;
}
.oButton:hover {
  color: #fff;
  background-color: #e5163a;
  cursor: pointer;
} 
.oButton:hover::before {
  clip-path: circle(100% at 50% 50%);
}
@media screen and (min-width: 1054px) and (max-width: 2000px){
  .imagens{
    height: 100vh;
    width:100%;
  
   background-image: url(../assets/wall.jpg);
  }
  .quadradoCont {
  width: 40%;
  height: 38rem;
  position: fixed;
  background-color: #4069a7d8;
  left: 40%;
  display: flex;
  border: 10px solid black;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
}
  .arrumandobaixo{
  position: relative; top: 13%; left: 10%; display: block
}

  .bemVindo{
    font-size: 40px !important;
  }

  .none{
    display: none;
  }
  .oLoginTodo {
  width: 18rem;
  height: 100%;

  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-image: url(../assets/rpg.jpg);
}
  
}
@media screen and (min-width: 400px) and (max-width: 1054px){
  .oLoginTodo {
  width: 100%;
  height: 100%;
  position: fixed;
padding-left: 60px;
padding-right: 60px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-image: url(../assets/rpg.jpg);
}

.quadradoCont {
  width:100%;
  height: 45rem;
  position: fixed;
  background-color: #4069a7d8;
  left: 0%;
  top: 0px;
  display: flex;
  border: 10px solid black;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
}

.imagens{
height:0px;

}
}
@media screen and (min-width: 300px) and (max-width: 400px){

  .oLoginTodo {
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-image: url(../assets/rpg.jpg);
  
}
.imagens{
height:0px;

}
}
</style>
