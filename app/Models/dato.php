<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class dato extends Model
{
    use HasFactory;
    protected $fillable = ['nombre','descripcion','fechaInicio','fechaFin','ubicacion','departamento',
    'municipio','horasCurso','modalidad','tipoDeCosto','costo','participantes','numeroCantidadEvaluaciones',
    'numeroContrato','numeroOrdenDeCompra','numeroCompraBolsa','numeroItem','programa','facilitador'
    ];
    
    public function eventos(){
        return $this->hasMany(evento::class);
    }

}
