<?= get('message');?>

<!-- BS3 Form -->
<form action="/pages/forms/edit_user.php" method="post" class="form-horizontal" role="form">
    <legend></legend>
    <div class="form-group">
        <label for="name" class="col-sm-2 control-label">Name</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" name="name" placeholder="text">
        </div>
    </div>
    <div class="form-group">
        <label for="surname" class="col-sm-2 control-label">Surname</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" name="surname" placeholder="text">
        </div>
    </div>
    <div class="form-group">
        <label for="email" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" name="email" placeholder="Email">
        </div>
    </div>
    <div class="form-group">
        <label for="password" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" name="password" placeholder="Password">
        </div>
    </div>

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Sign in</button>
        </div>
    </div>
</form>
