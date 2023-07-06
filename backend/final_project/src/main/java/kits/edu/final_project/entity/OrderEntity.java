package kits.edu.final_project.entity;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import java.util.Set;

@Entity(name = "orders")
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="order_id")
    private int id;

    @Column(name = "duration")
    private int duration;
    @Column(name = "order_type")
    private boolean orderType;
    @OneToMany(mappedBy = "order")
    private Set<OrderMovie> orderMovies;

    @ManyToOne
    @JoinColumn(name = "package_id")
    private PackageEntity pack;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public boolean isOrderType() {
        return orderType;
    }

    public void setOrderType(boolean orderType) {
        this.orderType = orderType;
    }

    public Set<OrderMovie> getOrderMovies() {
        return orderMovies;
    }

    public void setOrderMovies(Set<OrderMovie> orderMovies) {
        this.orderMovies = orderMovies;
    }

    public PackageEntity getPack() {
        return pack;
    }

    public void setPack(PackageEntity pack) {
        this.pack = pack;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}
