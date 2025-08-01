<a href="?page=create_user" class="btn btn-primary">Cadastre-se</a>

<h2>Página Inicial - Home</h2>

<div class="table-responsive">
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Email</th>
                <th>#</th>
                <th>#</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach (all('users') as $user):?>
                <tr>
                    <td><?= $user['ID_USER'] ?></td>
                    <td><?= $user['NAME'] ?></td>
                    <td><?= $user['EMAIL'] ?></td>
                    <td>
                        <a href="/?page=edit_user&id=<?= $user['ID_USER'] ?>" class = "btn btn-success">Editar <i class="bi bi-pencil"></i></a>
                    </td>
                    <td>
                        <a href="/?page=delete_user&id=<?= $user['ID_USER'] ?>" class = "btn btn-danger"> Deletar <i class="bi bi-eraser"></i></a>
                    </td>
                </tr>
                <?php endforeach; ?>
        </tbody>
    </table>
</div>
