import { defineStore } from "pinia";
import { api } from "../lib/api";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      usuarioLogado: false,
      id: "",
      token: "",
      nome: "",
      icone: "",
    };
  },
  actions: {
    login(dados = {}) {
      this.usuarioLogado = true;
      this.token = dados?.token;
      this.nome = dados?.nome;
      this.icone = dados?.icone;
      this.id =dados?.id;
      api.defaults.headers.Authorization = `Bearer ${dados.token}`;

      localStorage.setItem("token", dados.token);
    },
    deslogar() {
      this.usuarioLogado = false;
      localStorage.clear();
      api.defaults.headers["Authorization"] = `Bearer `;
    },
    async relogar(token) {
      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      try {
        const resposta = await api.get("/user/sessao");
        this.token = token;
        this.nome = resposta.data.nome;
        this.icone = resposta.data.icone;
        this.id= resposta.data.id
        this.usuarioLogado = true;
      } catch (error) {
        localStorage.clear();
        api.defaults.headers["Authorization"] = `Bearer `;
      }
    },
  },
});
