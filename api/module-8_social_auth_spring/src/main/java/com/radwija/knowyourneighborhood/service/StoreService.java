package com.radwija.knowyourneighborhood.service;

import com.radwija.knowyourneighborhood.model.Store;
import com.radwija.knowyourneighborhood.security.UserPrincipal;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface StoreService {
    Store saveStore(UserPrincipal userPrincipal, Store store);

    ResponseEntity<Store> updateOwnStore(Long id, Store updatedStore, UserPrincipal userPrincipal);
    Store updateUserStore(Long id, Store updatedStore);

    List<Store> searchStoreByName(String keyword);

    Optional<Store> viewStoreDetail(Long cId);

    List<Store> showAllStores();

    List<Store> showStoreByOwner(Long uId);

    void deleteStore(Long id);
}
