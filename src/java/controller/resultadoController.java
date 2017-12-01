/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import com.google.gson.Gson;
import daos.scoreDAO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author zerep08
 */
@Controller
@RequestMapping("/resultado")
public class resultadoController {
    @RequestMapping(method = RequestMethod.GET)
    public String salvarMostrar(@RequestParam ("usuario")String usr, @RequestParam("discos")
            String disc, @RequestParam("movimientos")String mov, Model model ){
        int disco = Integer.parseInt(disc);
        int movimiento = Integer.parseInt(mov);
        scoreDAO score = new scoreDAO();
        score.saveScore(usr,disco,movimiento);
        Gson json = new Gson();
         System.out.println(json.toJson(score.getAllScore()));
        return "mostrar";
    }
}
