package com.kios.tu.reponsitory;

import java.util.Optional;

import com.kios.tu.model.ERole;
import com.kios.tu.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
