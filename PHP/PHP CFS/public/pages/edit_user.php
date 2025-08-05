<?= get('message'); ?>
<?php
    $user = find('users', 'ID_USER', $_GET['id']);
?>

<div class="container">
    <!-- BS3 Form -->
    <form action="/pages/forms/edit_user.php" method="post" class="form-horizontal" role="form">
        <input type="hidden" name="id" value="<?= $user->ID_USER; ?>">
        <legend>Alterar Usuário</legend>
        <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" name="name" placeholder="text" value="<?= $user->NAME; ?>">
            </div>
        </div>
        <div class="form-group">
            <label for="surname" class="col-sm-2 control-label">Surname</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" name="surname" placeholder="text" value="<?= $user->SURNAME; ?>">
            </div>
        </div>
        <div class="form-group">
            <label for="email" class="col-sm-2 control-label">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" name="email" placeholder="Email" value="<?= $user->EMAIL; ?>">
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default">Confirm</button>
            </div>
        </div>
    </form>
</div>