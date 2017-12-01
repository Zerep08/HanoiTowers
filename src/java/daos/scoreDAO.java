/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package daos;
import beans.Score;
import hbm.HibernateUtil;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;


/**
 *
 * @author zerep08
 */
public class scoreDAO {
    Session session;

    public scoreDAO() {
        session = HibernateUtil.getLocalSession();
    }

    public scoreDAO(Session session) {
        this.session = session;
    }
    
    public void saveScore(String usuario, int discos, int movimientos ){
        Score score = new Score();
        score.setName(usuario);
        score.setDiscos(discos);
        score.setMovimientos(movimientos);
        
         try{
            Transaction transaccion=session.beginTransaction();
            session.save(score);
            transaccion.commit();
        }catch(Exception e){
            e.getStackTrace();
        }
         
    }
    
    public List<Score>getAllScore(){
        List<Score> lista = (List<Score>)session.createCriteria(Score.class)
                .addOrder(Order.desc("movimientos")).list();
        
        return lista;
    
    }
    

    
    
    
}


