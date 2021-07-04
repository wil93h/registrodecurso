<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('datos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre',255);
            $table->string('descripcion',255);
            $table->string('fechaInicio',255);
            $table->string('fechaFin',255);
            $table->string('ubicacion',255);
            $table->string('departamento',255);
            $table->string('municipio',255);
            $table->string('horasCurso',255);
            $table->string('modalidad',255);
            $table->string('tipoDeCosto',255);
            $table->string('costo',255);
            $table->string('participantes',255);
            $table->string('numeroCantidadEvaluaciones',255);
            $table->string('numeroContrato',255);
            $table->string('numeroOrdenDeCompra',255);
            $table->string('numeroCompraBolsa',255);
            $table->string('numeroItem',255);
            $table->string('programa',255);
            $table->string('facilitador',255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('datos');
    }
}
