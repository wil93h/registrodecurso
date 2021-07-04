<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DatoRequest;
use App\Models\dato;
use App\Models\evento;
use Illuminate\Http\Request;

class DatoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        return dato::all()->load('eventos');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    
    public function store(Request $request)
    {   
       
        try{
            $createDatos = dato::create($request->formValues);
            $status = false;
            foreach ($request->inputNameArray as $array){
                $createEvento = evento::create([
                    'dato_id'=> $createDatos->id,
                    'horasEvento'=> $array['horasEvento'],
                    'fechaHoraInicio'=> $array['fechaHoraInicio'],
                    'fechaHoraFin'=> $array['fechaHoraFin'],
                ]);
                $createEvento->id?$status=true:$status=false;
        }
        } catch (\Throwable $th) {
            $data['message'] = $th->getMessage();
        }
        
        if($status){
        $createDatos->save();
        $data['message'] = 'Se a guardado con éxito';
        $createEvento->save();
        }
            // $data['request'] = $createDatos->id? true : false;
            // $data['request2'] = $createEvento;
        $data['successes'] = true;
        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
