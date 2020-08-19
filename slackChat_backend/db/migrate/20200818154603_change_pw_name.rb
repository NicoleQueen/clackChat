class ChangePwName < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :password, :password_digest
  end
<<<<<<< HEAD
end
=======
end
>>>>>>> 1333aa741e29bf957154813138b4b536c524b6c4
