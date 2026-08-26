-- Sistema de Produtos

CREATE TABLE IF NOT EXISTS categorias (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(100) NOT NULL UNIQUE,
    descricao TEXT,
    criado_em TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS produtos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    categoria_id UUID REFERENCES categorias(id) ON DELETE SET NULL,

    nome VARCHAR(255) NOT NULL,
    descricao TEXT,

    sku VARCHAR(100) UNIQUE,
    codigo_barras VARCHAR(100) UNIQUE,

    preco DECIMAL(10,2) NOT NULL CHECK (preco >= 0),
    custo DECIMAL(10,2) DEFAULT 0 CHECK (custo >= 0),

    estoque INTEGER NOT NULL DEFAULT 0 CHECK (estoque >= 0),
    estoque_minimo INTEGER DEFAULT 0 CHECK (estoque_minimo >= 0),

    ativo BOOLEAN DEFAULT TRUE,

    criado_em TIMESTAMPTZ DEFAULT NOW(),
    atualizado_em TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS movimentacoes_estoque (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    produto_id UUID NOT NULL REFERENCES produtos(id) ON DELETE CASCADE,

    tipo VARCHAR(10) NOT NULL CHECK (tipo IN ('entrada', 'saida')),
    quantidade INTEGER NOT NULL CHECK (quantidade > 0),

    observacao TEXT,

    criado_em TIMESTAMPTZ DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION atualizar_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.atualizado_em = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_produtos_atualizado_em
BEFORE UPDATE ON produtos
FOR EACH ROW
EXECUTE FUNCTION atualizar_timestamp();

CREATE INDEX IF NOT EXISTS idx_produtos_nome
ON produtos(nome);

CREATE INDEX IF NOT EXISTS idx_produtos_categoria
ON produtos(categoria_id);

CREATE INDEX IF NOT EXISTS idx_movimentacoes_produto
ON movimentacoes_estoque(produto_id);
