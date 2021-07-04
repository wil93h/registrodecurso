<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class evento extends Model
{
    use HasFactory;

    protected $fillable = [
        'dato_id' ,
        'horasEvento' ,
        'fechaHoraInicio' ,
        'fechaHoraFin' 
    ];

    public function dato(){
        return $this->belongsTo(dato::class);
    }

}
