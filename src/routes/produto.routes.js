import { Router } from "express";
import {
    criarProduto,
    listarProdutos,
    buscarProduto,
    precoCrescente,
    precoDecrescente,
    atualizarProduto,
    deletarProduto

} from "../controllers/produto.controller.js";


const router = Router();

router.post("/", criarProduto);
router.get("/", listarProdutos);
router.get("/:id", buscarProduto);
router.get("/crescente", precoCrescente);
router.get("/decrescente", precoDecrescente);
router.put("/:id", atualizarProduto);
router.delete("/:id", deletarProduto)

export default router;