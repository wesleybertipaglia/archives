<!-- Products Start -->
<div class="container-fluid pt-5">
        <div class="text-center mb-4">
            <h2 class="section-title px-5"><span class="px-2">Trandy Products</span></h2>
        </div>
        <?php
            require_once "bd/conexao.php";
            //listar produtos
            try {
                $sql = "select * from produtos order by rand() limit 8";
                $resultado = $conexao->query($sql);
                $dados = $resultado->fetchAll(PDO::FETCH_ASSOC);
                foreach ($dados as $linha) { //pega cada registro do array para mostrar na tela
                ?>
                <!-- parte html do produto -->
                <div class="row px-xl-5 pb-3">
                    <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div class="card product-item border-0 mb-4">
                            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                
                                <?php echo '<img src="data:image/jpeg;base64,'.base64_encode($linha['foto']).'" style="width:100%; height:auto; aspect-ratio:1/1;"/>' ?>
                            </div>
                            <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 class="text-truncate mb-3"><?php echo $linha['nome'];?></h6>
                                <div class="d-flex justify-content-center">
                                    <h6><?php echo $linha['preco'];?></h6><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between bg-light border">
                                <a href="<?php echo 'detail.php?id='.$linha['id'];?>" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                <a href="shop/addtocart.php?id=<?php echo $linha['id']; ?>" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                            </div>
                        </div>
                    </div>
                <?php
                }
            } catch (PDOException $i) {
                //se houver exceção, exibe
                die("Erro: <code>" . $i->getMessage() . "</code>");
            }
        ?>
    <!-- Products End -->