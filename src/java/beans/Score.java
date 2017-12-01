/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package beans;
import com.google.gson.annotations.Expose;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author zerep08
 */
@Entity
@Table(name = "score")
public class Score  implements Serializable{
    @Expose
    @Id @GeneratedValue
    @Column(name = "idscore")
    private int idscore;
    
    @Expose
    @Column(name = "usuario")
    private String name;
    
    @Expose
    @Column(name = "discos")
    private int discos;
    
    @Expose
    @Column(name = "movimientos")
    private int movimientos;
    
    public Score(){}

    public Score(int idscore, String name, int discos, int movimientos) {
        this.idscore = idscore;
        this.name = name;
        this.discos = discos;
        this.movimientos = movimientos;
    }

    public int getIdscore() {
        return idscore;
    }

    public void setIdscore(int idscore) {
        this.idscore = idscore;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getDiscos() {
        return discos;
    }

    public void setDiscos(int discos) {
        this.discos = discos;
    }

    public int getMovimientos() {
        return movimientos;
    }

    public void setMovimientos(int movimientos) {
        this.movimientos = movimientos;
    }
    
   
    
}
