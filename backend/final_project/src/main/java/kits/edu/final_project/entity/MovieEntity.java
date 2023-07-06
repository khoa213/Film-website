package kits.edu.final_project.entity;


import javax.persistence.*;
import java.util.Date;
import java.util.Set;
import java.util.Timer;

@Entity(name = "movies")
public class MovieEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="movie_id")
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String desc;

    @Column(name = "release_date")
    private Date releaseDate;

    @Column(name = "duration")
    private int duration;

    @Column(name = "price")
    private int price;

    @Column(name = "language")
    private String language;
    @Column(name = "bg_color")
    private String bgColor;
    @Column(name = "item_color")
    private String itemColor;

    @OneToMany(mappedBy = "movie")
    private Set<ReviewEntity> reviews;
    @OneToMany(mappedBy = "movie")
    private Set<GenreMovie> genreMovies;
    @OneToMany(mappedBy = "movie")
    private Set<MovieActor> movieActors;
    @OneToMany(mappedBy = "movie")
    private Set<OrderMovie> orderMovies;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getBgColor() {
        return bgColor;
    }

    public void setBgColor(String bgColor) {
        this.bgColor = bgColor;
    }

    public String getItemColor() {
        return itemColor;
    }

    public void setItemColor(String itemColor) {
        this.itemColor = itemColor;
    }

    public Set<ReviewEntity> getReviews() {
        return reviews;
    }

    public void setReviews(Set<ReviewEntity> reviews) {
        this.reviews = reviews;
    }

    public Set<GenreMovie> getGenreMovies() {
        return genreMovies;
    }

    public void setGenreMovies(Set<GenreMovie> genreMovies) {
        this.genreMovies = genreMovies;
    }

    public Set<MovieActor> getMovieActors() {
        return movieActors;
    }

    public void setMovieActors(Set<MovieActor> movieActors) {
        this.movieActors = movieActors;
    }

    public Set<OrderMovie> getOrderMovies() {
        return orderMovies;
    }

    public void setOrderMovies(Set<OrderMovie> orderMovies) {
        this.orderMovies = orderMovies;
    }
}
