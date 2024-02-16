/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";


describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve solucionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Beaumont Summit Kit')

        cy.get('#tab-description > :nth-child(1)').should('contain', 'Descrição')
        
    });

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
});