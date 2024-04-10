<!-- Topbar Start -->
<div class="row bg-secondary py-2 px-xl-5">
    <div class="col-lg-6 d-none d-lg-block">
        <div class="d-inline-flex align-items-center">
            <a class="text-dark" href="">FAQs</a>
            <span class="text-muted px-2">|</span>
            <a class="text-dark" href="">Ajuda</a>
        </div>
    </div>
    <div class="row align-items-center py-3 px-xl-5">
        <div class="col-lg-3 d-none d-lg-block">
            <a href="" class="text-decoration-none">
                <h1 class="m-0 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border px-3 mr-1">Garagem</span></h1>
            </a>
        </div>
        <div class="col-lg-6 col-6 text-left">
            <form method="GET" action="index.php?<?php echo $_GET; ?>">
                <div class="input-group">
                    <input type="text" name="q" class="form-control" placeholder="Procure os produtos">
                    <div class="input-group-append">
                        <span class="input-group-text bg-transparent text-primary">
                            <i class="fa fa-search"></i>
                        </span>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-lg-3 col-6 text-right">
            <a href="" class="btn border">
                <i class="fas fa-heart text-primary"></i>
                <span class="badge">0</span>
            </a>
            <a href="" class="btn border">
                <i class="fas fa-shopping-cart text-primary"></i>
                <span class="badge">0</span>
            </a>
        </div>
    </div>
</div>
<!-- Topbar End -->