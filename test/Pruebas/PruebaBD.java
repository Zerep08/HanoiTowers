/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Pruebas;
 
import beans.Score;
import com.google.gson.Gson;
import daos.scoreDAO;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author zerep08
 */
public class PruebaBD {
    
    public PruebaBD() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
     @Test
    public void hello() {
    String str;
        scoreDAO score = new scoreDAO();
    Gson json = new Gson();
    
    str = json.toJson(score.getAllScore());
    
         System.out.println(str);

    }
}
